export interface Question {
  icon:       React.ReactNode;
  question:   string;
  reference:  string;
  response:   Response[];
  subTitle:   string;
  title:      string;
}

interface Response {
  before:   string;
  after:    string;
}