import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { postData } from '../../../apis';
/**
 * @description:Adding New Recipes
 * @author:Dhivya.C
 */
class AddRecipe extends React.Component {

    render() {
        return (
            /**
             * Validation on Formik
             */
            <Formik
                initialValues={{   
                    id:'',                
                    category: '',   
                    mealName: '',
                    mealDescription: '',
                    mealImage: '',
                    quantity: '',
                    price: '',
                    ratings: '',
                    picked: ''
                }}
                validationSchema={Yup.object().shape({
                    category: Yup.string()
                        .required('Category is required'),
                    mealName: Yup.string()
                        .required('Meal Name is required'),
                    mealImage: Yup.string()
                        .required('Meal Image is required'),
                    mealDescription: Yup.string()
                        .required('Meal Description is required'),
                    quantity: Yup.number()
                        .required('quantity is required'),
                    price: Yup.number()
                        .min(6, 'price must be at least 6 numbers')
                        .required('price is required'),
                    ratings: Yup.number()
                        .min(0, 'ratings must be above 0 numbers')
                        .max(5, 'ratings must be below  5 numbers')
                        .required('ratings is required'),
                    picked: Yup.string().required("Meal Type is required")
                })}
               
                onSubmit={fields => {
                    const URL1 = `/meals`;
                    const URL2 = `/details`;
                    fields.id=Math.floor((Math.random() * 1000) + 1);
                    let {id, category, mealName, mealDescription, mealImage, quantity, price, ratings, picked } = fields
                    let obj1 = { id,category, mealName, mealDescription, mealImage, quantity, price };
                  /**
                   * Adding Recipe and Details 
                   */
                    postData(URL1, obj1)                        
                        .catch(error => {
                            console.log(error);
                        });
                    if (fields.mealDescription) {                 
                        let mealId=fields.id;
                        let obj2 = { mealId, ratings, picked }
                        postData(URL2, obj2)
                            .then(res => {
                                fields = res.data
                                alert("Recipe Added")
                            })
                            .catch(error => {
                                console.log(error);
                            });

                    }

                }}
            >
                {({ errors, status, touched }) => (
                    <Form>
                        <div className="form-row">
                            <div className="form-group col-5">
                                <label htmlFor="mealName">Meal Name</label>
                                <Field name="mealName" type="text" className={'form-control' + (errors.mealName && touched.mealName ? ' is-invalid' : '')} />
                                <ErrorMessage name="mealName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col">
                                <label>Category</label>
                                <Field name="category" as="select" className={'form-control' + (errors.category && touched.category ? ' is-invalid' : '')}>
                                <option value=""></option>
                                    <option value="Veg">Vegitarian</option>
                                    <option value="Non-Veg">Non-Vegitarian</option>
                                </Field>
                                <ErrorMessage name="category" component="div" className="invalid-feedback" />
                            </div>

                            <div className="form-group col-5">
                                <label htmlFor="mealDescription">Meal description</label>
                                <Field name="mealDescription" type="textarea" className={'form-control' + (errors.mealDescription && touched.mealDescription ? ' is-invalid' : '')} />
                                <ErrorMessage name="mealDescription" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label htmlFor="mealImage">Meal Image</label>
                                <Field name="mealImage" type="textarea" className={'form-control' + (errors.mealImage && touched.mealImage ? ' is-invalid' : '')} />
                                <ErrorMessage name="mealImage" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="quantity">quantity</label>
                                <Field name="quantity" type="number" className={'form-control' + (errors.quantity && touched.quantity ? ' is-invalid' : '')} />
                                <ErrorMessage name="quantity" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label htmlFor="price">price</label>
                                <Field name="price" type="number" className={'form-control' + (errors.price && touched.price ? ' is-invalid' : '')} />
                                <ErrorMessage name="price" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="ratings">Ratings</label>
                                <Field name="ratings" type="number" className={'form-control' + (errors.ratings && touched.ratings ? ' is-invalid' : '')} />
                                <ErrorMessage name="ratings" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div id="my-radio-group">Meals Type</div>
                        <div className="form-row">
                            <div className="form-group col-2">
                                <label htmlFor="picked"> Full Meals </label>
                                <Field type="radio" name="picked" value="Full Meals" className={'form-control' + (errors.picked && touched.picked ? ' is-invalid' : '')} />
                                <ErrorMessage name="picked" component="div" className="invalid-feedback" />
                            </div><div className="form-group col-2">
                                <label htmlFor="picked"> Half Meals  </label>
                                <Field type="radio" name="picked" value="Half Meals" className={'form-control' + (errors.picked && touched.picked ? ' is-invalid' : '')} />
                                <ErrorMessage name="picked" component="div" className="invalid-feedback" />
                            </div>
                            {/* <div>Picked: {values.picked}</div> */}

                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Add Recipe</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                )}
            </Formik>
        )
    }
}

export default AddRecipe