export class Timeline {

  constructor(
    public $key: string,
    public title: string,
    public description: string,
    public created_date: Date,
    public is_public: boolean,
    public last_changed: Date
  ){

  }

  static fromJson({$key, title, description, created_date, is_public, last_changed}): Timeline {
    return new Timeline(
      $key,
      title,
      description,
      created_date,
      is_public,
      last_changed
    );
  }

  static fromJsonList(array): Timeline[] {
    return array.map(json => Timeline.fromJson(json));
  }


}
