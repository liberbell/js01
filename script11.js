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

var course01 = new Course("Java script Essential Traning.", "Samuel jackson", 1, true, 0);
var course02 = new Course("Up and running.", "Taylor swift", 2, true, 100);

console.log(course01);
console.log(course02);
