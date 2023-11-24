type Languages = {
        iso639_1?: string,
        iso639_2: string,
        name: string,
        nativeName?: string
}
type Currencies = {
        code: string,
        name: string,
        symbol: string
}
type RegionalBlocs = {
    acronym: string,
    name: string,
    otherNames?: string[]  
}

export type PropsData = {
    name: string,
    topLevelDomain: string[],
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: string[],
    capital?: string,
    altSpellings?: string[],
    subregion: string,
    region: string,
    population: number,
    latlng?: number[],
    demonym: string,
    area?: number,
    gini?: number,
    timezones: string[],
    borders?: string[],
    nativeName: string,
    numericCode: string,
    flags: {
      svg: string,
      png: string
    },
    currencies?: Currencies[],
    languages: Languages[],
    translations: {
      br: string,
      pt: string,
      nl: string,
      hr: string,
      fa?: string,
      de: string,
      es: string,
      fr: string,
      ja: string,
      it: string,
      hu: string
    },
    flag: string,
    regionalBlocs?: RegionalBlocs[],
    cioc?: string,
    independent: boolean
}

