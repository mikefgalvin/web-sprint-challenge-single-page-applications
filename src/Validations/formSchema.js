import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('Order needs a name').min(2, 'name must be min of 2 characters'),
  size: Yup.string().oneOf(['small', 'medium', 'large', 'xlarge'],'please choose a size'),
  sauce: Yup.string().oneOf(['red', 'garlicRanch', 'bbqSauce', 'spinachAlfredo'], 'please choose a sauce'),
  pepperoni: Yup.boolean(),
  sausage: Yup.boolean(),
  bacon: Yup.boolean(),
  onions: Yup.boolean(),
  greenPeppers: Yup.boolean(),
  olives: Yup.boolean(),
  specialInstructions: Yup.string(),
})