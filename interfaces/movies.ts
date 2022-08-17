export interface TMovie {
  uid?: number;
  title?: string;
  mini_description?: string;
  description?: string;
  hero?: string;
  poster?: string;
  votes?: number;
  release_date?: string;
  budget?: number;
  revenue?: number;
  genres?: [
    {
      id: "";
      name: "";
    }
  ];
  runtime?: string;
  production_companies?: [{}];
}
