export class Event {

  constructor(
    public $key: string,
    public title: string,
    public description: string,
    public start: number,
    public end: number
  ){

  }

  static fromJson({$key, title, description, start, end}): Event {
    return new Event(
      $key,
      title,
      description,
      start,
      end
    );
  }

  static fromJsonList(array): Event[] {
    return array.map(json => Event.fromJson(json));
  }


}
