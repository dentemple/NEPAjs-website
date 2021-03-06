// @flow

/*
  Define custom static types
*/

const exampleStringLiteral = `key=${"str"}`;
export type StringLiteral = typeof exampleStringLiteral;

export type Meetup = {|
  announced: Boolean,
  created: Number,
  description: String,
  event_url: String,
  group: Object,
  headcount: Number,
  how_to_find_us: String,
  id: String,
  maybe_rsvp_count: Number,
  name: String,
  status: String,
  time: Number,
  updated: Number,
  utc_offset: Number,
  venue: Venue,
  visibility: String,
  waitlist_count: Number,
  yes_rsvp_count: Number
|};

export type Venue = {|
  address_1: String,
  city: String,
  country: String,
  id: Number,
  lat: Number,
  localized_country_name: String,
  lon: Number,
  name: String,
  repinned: Boolean,
  state: String,
  zip: String
|};
