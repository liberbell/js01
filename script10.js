var course = new Object();

// course.title = "Java script Essential Traning.";
// course.instructor = "Samuel jackson";
// course.level = 1;
// course.published = true;
// course.views = 0;

var course = {
  title: "Java script Essential Traning.",
  instructor: "Samuel jackson",
  level: 1,
  published: true,
  views: 0,

  updateViews: function() {
    return ++course.views;
  }
}

console.log(course);

var currentData = new Date();
var course02 = new Course();
