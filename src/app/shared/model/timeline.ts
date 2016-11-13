export class Timeline {

  constructor(
    public $key: string,
    public title: string,
    public description: string,
    public created_date: Date,
    public is_public: boolean
  ){

  }

  static fromJson({$key, title, description, created_date, is_public}): Timeline {
    return new Timeline(
      $key,
      title,
      description,
      created_date,
      is_public
    );
  }

  static fromJsonList(array): Timeline[] {
    return array.map(json => Timeline.fromJson(json));
  }


}
