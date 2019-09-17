if (document.getElementById("calendar")) {
  var calendar;
  function showInfo(data, tabletop) {
    var i = 0;
    var source = data.map(function(item) {
      return {
        "id": i++,
        "title": item["Title"],
        "class": item["Kind"],
        "start": item["Start (Calculated)"],
        "end": item["End (Calculated)"]
      }
    });

    calendar = $("#calendar").calendar(
      {
      tmpl_path: "/tmpls/",
      events_source: source,
      onAfterViewLoad: function(view) {
        $('#calendar-date').text(this.getTitle());
        $('.btn-group button').removeClass('active');
        $('button[data-calendar-view="' + view + '"]').addClass('active');
      }
    });
  }

  var tabletop = Tabletop.init({
    key: '1czwBVqDokV6HjpU1Bn5cIw_uKP9DQB4jiYiMJsnnhe8',
    callback: showInfo,
    simpleSheet: true
  })
};

$('.btn-group button[data-calendar-nav]').each(function() {
  var $this = $(this);
  $this.click(function() {
    calendar.navigate($this.data('calendar-nav'));
  });
});

$('.btn-group button[data-calendar-view]').each(function() {
  var $this = $(this);
  $this.click(function() {
    calendar.view($this.data('calendar-view'));
  });
});
