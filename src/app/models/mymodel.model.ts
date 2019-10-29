import MymodelEntry from './mymodel-entry.model';


export default interface Mymodel {
  code: string;
  voyage: string;
  descriptions:  MymodelEntry[];
}
