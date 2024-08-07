document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    // plugins: [FullCalendar.ICalendar, FullCalendar.DayGrid],
    initialView: "dayGridMonth",
    // events: {
    //   url: "https://p124-caldav.icloud.com/published/2/MTY2NjMyNjA2ODcxNjY2MyTsvEVNIJeMoSeHsWZxa_n2_Vk4eubZlb4gwNhRbhruhiCL8nEOplpl23knYV79c9CQDcOexGM9SxF5_wLd3SA",
    //   format: "ics",
    // },
  });
  calendar.render();
});
