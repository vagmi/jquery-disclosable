(function($){
 $.fn.disclosable = function(options){
  var self=this;
  this.original_title=this.attr('title');
  panel_classes="ui-disclosable ui-dialog ui-widget ui-widget-content ui-corner-all";
  panel_title_bar_classes="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix";
  panel_title_classes="ui-dialog-title";
  panel_toggle_classes="ui-dialog-titlebar-close ui-corner-all";
  panel_toggle_link_classes="ui-icon ui-icon-circle-triangle-n";
  this.hide();
  panel=$('<div></div>').addClass(panel_classes).insertBefore(this).css("margin","0.5em 0");
  panel_title_bar=$('<div></div>').addClass(panel_title_bar_classes).appendTo(panel);
  panel_title=$('<span></span>').addClass(panel_title_classes).appendTo(panel_title_bar).text(this.original_title);
  toggle_link=$('<a href="#"/>').addClass(panel_toggle_classes).appendTo(panel_title_bar)
  toggle_link_span=$('<span/>').addClass(panel_toggle_link_classes).text("close").appendTo(toggle_link);
  toggle_link.click(function(){
    if(self.css("display")=="block"){
      self.hide('normal');
      $(this).find('span').removeClass("ui-icon-circle-triangle-n");
      $(this).find('span').addClass("ui-icon-circle-triangle-s");
      }
      else
      {
      self.show('normal');
      $(this).find('span').removeClass("ui-icon-circle-triangle-s");
      $(this).find('span').addClass("ui-icon-circle-triangle-n");
      }
    });
  this.appendTo(panel).show();
  console.log($(this).attr("title"));
 }
 })(jQuery);
