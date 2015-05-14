templates["posts_list"] = "newPostsList";
templates["post_item"] = "newPostItem";
templates["nav"] = "newNav";
templates["taglineBanner"] = "newTaglineBanner";

Meteor.startup(function () {
  Router.map(function() {
    this.route('about', {
      path: '/about',
      template: getTemplate('aboutPage')
    });
  });
});


primaryNav.push({
  template: 'aboutLink',
  order: 3
});

