export class App {
  configureRouter(config, router) {
    config.title = 'FA Tagger';
    config.map([
      { route: ['tags', ''], name: 'tags', moduleId: 'tags/index', nav: true, title: 'Tags' },
      { route: 'tag/:id', name: 'tag', moduleId: 'tags/detail', title: 'Tag' },
      { route: 'icons', name: 'icons', moduleId: 'icons/index', nav: true, title: 'Icons' },
      { route: 'icon/:id', name: 'icon', moduleId: 'icons/detail', title: 'Icon' }
    ]);
    this.router = router;
  }
}