function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function() {
    return ++this.views;
  };
}

var courses = [
  new Course("Java script Essential Traning.", "Samuel jackson", 1, true, 0),
  new Course("Up and running.", "Taylor swift", 2, true, 100)
];

// var course01 = new Course("Java script Essential Traning.", "Samuel jackson", 1, true, 0);
// var course02 = new Course("Up and running.", "Taylor swift", 2, true, 100);

// console.log(course01);
// console.log(course02);
console.log(courses[1].updateViews());
