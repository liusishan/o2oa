MWF.xDesktop.requireApp("Template", "Explorer", null, false);
MWF.xDesktop.requireApp("Template", "MForm", null, false);
MWF.xDesktop.requireApp("Template", "MSelector", null, false);
MWF.xApplication.Report.StartRecordView = new Class({
    Extends: MWF.widget.Common,
    Implements: [Options, Events],

    options: {
        "style": "default",
        "action" : ""
    },
    initialize: function(node, app, options){
        this.setOptions(options);

        this.path = "/x_component_Report/$StartRecordView/";
        this.cssPath = "/x_component_Report/$StartRecordView/"+this.options.style+"/css.wcss";
        this._loadCss();
        this.app = app;
        this.container = $(node);
        this.load();
    },
    load: function(){
        this.node = new Element("div", {"styles": this.css.node}).inject(this.container);
        //this.leftNode = new Element("div", {"styles": this.css.leftNode}).inject(this.node);
        this.contentAreaNode  = new Element("div.contentAreaNode", {"styles": this.css.contentAreaNode}).inject(this.node);
        this.contentNode  = new Element("div.contentNode", {"styles": this.css.contentNode}).inject(this.contentAreaNode);
        this.filterNode = new Element("div.filterNode", {"styles": this.css.filterNode}).inject(this.contentNode);
        this.viewNode = new Element("div.viewNode", {"styles": this.css.viewNode}).inject(this.contentNode);

        //this.loadSideBar();
        this.resetNodeSizeFun = this.resetNodeSize.bind(this);
        this.app.addEvent("resize", this.resetNodeSizeFun );

        this.loadFilter();
        this.loadView();

        this.resetNodeSize();

    },
    resetNodeSize: function(){
        //var size = this.container.getSize();
        //if (this.app.reportConfig.hideMenu=="static"){
        //    var y = size.y-120;
        //    this.node.setStyle("height", ""+y+"px");
        //    this.node.setStyle("margin-top", "60px");
        //}else{
        //    var y = size.y-20;
        //    this.node.setStyle("height", ""+y+"px");
        //}

        var size = this.container.getSize();
        var y = size.y-120;
        //this.node.setStyle("margin-top", "60px");
        //this.node.setStyle("height", ""+y+"px");
        if( !this.app.inContainer )this.viewNode.setStyle("height", ""+y+"px");
        //this.leftNode.setStyle("height", ""+size.y-60+"px");

        var sideBar = this.app.sideBar ? this.app.sideBar.getSize() : { x : 0, y : 0 };
        this.contentAreaNode.setStyle("margin-right",sideBar.x+"px");
    },
    loadFilter: function(options, callback){
        this.yearSelectorArea = new Element("div",{ styles : this.css.yearSelectorArea }).inject(this.filterNode);
        this.selector = new MWF.xApplication.Report.StartRecordView.YearSelect(this.yearSelectorArea, {
            "onSelectItem" : function( itemNode, itemData ){
                this.loadView()
            }.bind(this)
        } , this.app );
        this.selector.load();
    },
    loadView: function(){
        if (this.currentView) this.currentView.destroy();
        this.currentView = new MWF.xApplication.Report.StartRecordView.View( this.viewNode, this.app, this, {
            year : this.selector.getValue() || (new Date().getFullYear()),
            templateUrl : this.path + this.options.style+"/listItem.json"
        });
        this.currentView.load();
    },



    hide: function(){
        var fx = new Fx.Morph(this.node, {
            "duration": "300",
            "transition": Fx.Transitions.Expo.easeOut
        });
        fx.start({
            "opacity": 0
        }).chain(function(){
            this.node.setStyle("display", "none");
        }.bind(this));

    },
    show: function(){
        this.node.setStyles(this.css.node);
        var fx = new Fx.Morph(this.node, {
            "duration": "800",
            "transition": Fx.Transitions.Expo.easeOut
        });
        this.app.fireAppEvent("resize");
        fx.start({
            "opacity": 1,
            "left": "0px"
        }).chain(function(){
            this.node.setStyles({
                "position": "static",
                "width": "auto"
            });
        }.bind(this));
    },
    reload: function(){
        this.app.reload();
    },
    recordStatus : function(){
        var action = "";
        if( this.currentNavi )action = this.currentNavi.retrieve("action");
        return {
            action : action
        };
    },
    destroy : function(){
        if( this.currentView ){
            this.currentView.destroy()
        }
        this.app.removeEvent("resize", this.resetNodeSizeFun );
        this.node.destroy();
    }


});


MWF.xApplication.Report.StartRecordView.YearSelect = new Class({
    Extends: MSelector,
    options : {
        "style": "default",
        "width": "230px",
        "height": "30px",
        "textField" : "text",
        "valueField" : "value",
        "emptyOptionEnable" : false,
        "value" : (new Date()).getFullYear().toString()
    },
    _selectItem : function( itemNode, itemData ){

    },
    _loadData : function( callback ){
        var arr = [];
        var data = new Date();
        data.decrement("year",5);
        for( var i=0; i<11; i++ ){
            data.increment("year",1);
            arr.push({
                text : data.getFullYear(),
                value : data.getFullYear().toString()
            })
        }

        if(callback)callback( arr );
    }
});


MWF.xApplication.Report.StartRecordView.View = new Class({
    Extends: MWF.xApplication.Template.Explorer.ComplexView,
    options : {
        "scrollEnable" : true,
        "scrollType" : "window"
    },
    _createDocument: function(data, index){
        return new MWF.xApplication.Report.StartRecordView.Document(this.viewNode, data, this.explorer, this, null,  index);
    },
    _getCurrentPageData: function(callback, count){
        this.actions.listStartProfileByYear( this.options.year, function(json){
            if( !json.data )json.data = [];
            if (callback)callback(json);
        });
    },
    _removeDocument: function(documentData, all){
        this.actions.deleteStartProfile(documentData.id, function(json){
            this.reload();
            this.app.notice(this.app.lp.deleteStartRecordOK, "success");
        }.bind(this));
    },
    _create: function(){},
    _openDocument: function( documentData,index ){
    },
    _queryCreateViewNode: function(){
    },
    _postCreateViewNode: function( viewNode ){

    },
    _queryCreateViewHead:function(){},
    _postCreateViewHead: function( headNode ){}
    //destroyScroll: function(){
    //    if( this.scrollContainerFun ){
    //        var scrollNode = this.app.scrollNode ? this.app.scrollNode : this.container;
    //        scrollNode.removeEvent("scroll", this.scrollContainerFun );
    //        this.scrollContainerFun = null;
    //    }
    //},
    //setScroll: function(){
    //    var scrollNode = this.app.scrollNode ? this.app.scrollNode : this.container;
    //    scrollNode.setStyle("overflow","auto");
    //    this.scrollContainerFun = function(){
    //        if( !this.options.pagingEnable ){
    //            var scrollSize = scrollNode.getScrollSize();
    //            var clientSize = scrollNode.getSize();
    //            var scrollHeight = scrollSize.y - clientSize.y;
    //            if (scrollNode.scrollTop + 150 > scrollHeight ) {
    //                if (! this.isItemsLoaded) this.loadElementList();
    //            }
    //        }
    //    }.bind(this)
    //    scrollNode.addEvent("scroll", this.scrollContainerFun )
    //}
});


MWF.xApplication.Report.StartRecordView.Document = new Class({
    Extends: MWF.xApplication.Template.Explorer.ComplexDocument,
    _queryCreateDocumentNode:function( itemData ){
    },
    _postCreateDocumentNode: function( itemNode, itemData ){
        if(this.index % 2 == 1){
            itemNode.setStyle("background-color","#f0f0f0");
        }
    },
    open: function (e) {
        //this.view._openDocument(this.data, this.index);
    },
    edit : function(){

    },
    remove: function (e) {
        var lp = this.app.lp;
        var title = this.data.reportYear + "年" + this.data.reportMonth + "月";
        var text = lp.deleteStartRecord.replace(/{title}/g, title).replace(/{count}/g, this.data.createDocumentCount);
        var _self = this;
        this.node.setStyles(this.css.listViewTableTr_remove);
        this.readyRemove = true;
        this.view.lockNodeStyle = true;

        this.app.confirm("warn", e, lp.deleteStartRecordTitle, text, 350, 120, function () {
            _self.view._removeDocument(_self.data, false);
            _self.view.lockNodeStyle = false;
            this.close();
        }, function () {
            _self.node.setStyles(_self.css.listViewTableTr );
            e.setStyles(_self.css.actionDeleteNode);
            _self.readyRemove = false;
            _self.view.lockNodeStyle = false;
            this.close();
        });
    },
    mouseoverDocument : function(){
        this.node.setStyle("background-color","#fff7eb");
    },
    mouseoutDocument : function(){
        if(this.index % 2 == 1){
            this.node.setStyle("background-color","#f0f0f0");
        }else{
            this.node.setStyle("background-color","#fff");
        }
    }
});