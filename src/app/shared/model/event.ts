export class Event {

  constructor(
    public $key: string,
    public title: string,
    public description: string,
    public start_date: number,
    public end_date: number
  ){

  }

  static fromJson({$key, title, description, start_date, end_date}): Event {
    return new Event(
      $key,
      title,
      description,
      start_date,
      end_date
    );
  }

  static fromJsonList(array): Event[] {
    return array.map(json => Event.fromJson(json));
  }


}
