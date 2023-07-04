export interface ProductData {
  id: number;
  name: string;

  description: string;
  picture: string;
  type: {
    id: number;
    name: string;
  };
  categories: IDNameCommon[];
  implementationEffortText: null | string;
  investmentEffort: string;
  trl: {
    id: number;
    name: string;
  };
  video: string;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    sex: number;
    profilePicture: string;
    position: string;
  };
  company: {
    name: string;
    logo: string;
    address: {
      country: {
        name: string;
      };
      city: {
        name: string;
      };
      street: string;
      house: string;
      zipCode: string;
      longitude: string;
      latitude: string;
    };
  };
  businessModels: IDNameCommon[];
}

export interface IDNameCommon {
  id: number;
  name: string;
}

export interface OfferDetails {
  technologies: IDNameCommon[];
  trl: string;
  businessModels: IDNameCommon[];
  costs: string;
}

export interface Map {
  center: {
    lat: number;
    lng: number;
  };
}
