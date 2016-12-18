export class Timeline {

  constructor(
    public $key: string,
    public title: string,
    public description: string,
    public created_date: Date,
    public is_public: boolean,
    public last_changed: Date,
    public style_theme: string,
    public author: string
  ){

  }

  static fromJson({$key, title, description, created_date, is_public, last_changed, style_theme, author}): Timeline {
    return new Timeline(
      $key,
      title,
      description,
      created_date,
      is_public,
      last_changed,
      style_theme,
      author
    );
  }

  static fromJsonList(array): Timeline[] {
    return array.map(json => Timeline.fromJson(json));
  }


}
