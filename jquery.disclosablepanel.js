(function($){
 $.fn.disclosable = function(options){
  this.each(function(){
  var self=$(this);
  self.original_title=self.attr('title');
  panel_classes="ui-disclosable ui-dialog ui-widget ui-widget-content ui-corner-all";
  panel_title_bar_classes="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix";
  panel_title_classes="ui-dialog-title";
  panel_toggle_classes="ui-dialog-titlebar-close ui-corner-all";
  panel_toggle_link_classes="ui-icon ui-icon-circle-triangle-n";
  self.hide();
  var panel=$('<div></div>').addClass(panel_classes).insertBefore(self).css("margin","0.5em 0");
  if(options.hasOwnProperty('width')){
    panel.css('width',options.width);
  }
  var panel_title_bar=$('<div></div>').addClass(panel_title_bar_classes).appendTo(panel);
  var panel_title=$('<span></span>').addClass(panel_title_classes).appendTo(panel_title_bar).text(self.original_title);
  if(options.hasOwnProperty('title')){
    panel_title.text(options.title);
  }
  var toggle_link=$('<a href="#"/>').addClass(panel_toggle_classes).appendTo(panel_title_bar)
  var toggle_link_span=$('<span/>').addClass(panel_toggle_link_classes).text("close").appendTo(toggle_link);
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
      return false;
    });
  self.appendTo(panel).show();
  console.log($(self).attr("title"));
 });
  return this;
 }})(jQuery);
