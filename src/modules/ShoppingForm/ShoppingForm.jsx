import styles from './shoppingForm.module.scss';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';


const validationSchemaShopList = yup.object().shape({
  name: yup.string().required('Введіть назву товару'),
  number: yup.number().required('Введіть кількість').positive('Кількість має бути позитивним числом'),
  price: yup.number().required('Введіть ціну').positive('Ціна має бути позитивним числом'),
  urgentPurchase: yup.boolean().required('Виберіть терміновість покупки'),
  typeOfPurchase: yup.string().oneOf(['household chemicals', 'products', 'other'], 'Виберіть тип покупки'),
});

const shoppingValues = {
    name: '',
    number: '',
    price: '',
    urgentPurchase: false,
    typeOfPurchase: '',
}

const ShoppingForm = ({ onClick }) => {
    const handleSubmit = (values, { resetForm }) => {
        console.log(values)
        onClick(values);
        resetForm();
    }
    
    return (
        <div className={styles.mainFormBox}>
            <h2 className={styles.title}>Registration</h2>
            <Formik
                initialValues={shoppingValues}
                validationSchema={validationSchemaShopList}
                onSubmit={handleSubmit}
            >
               {({ errors, touched }) => (
         <Form>
            <div className={styles.fieldWrapper}>
                <Field className={styles.field} id="name" name="name" type="text" placeholder="Name" />
                {errors.name && touched.name ? (<div className={styles.error}>{errors.name}</div>) : null} 
            </div>
            <div className={styles.fieldWrapper}>
                <Field className={styles.field} id="number" name="number" type="number" placeholder="Number" />
                {errors.number && touched.number ? (<div className={styles.error}>{errors.number}</div>) : null} 
            </div>
            <div className={styles.fieldWrapper}>
                <Field className={styles.field} id="price" name="price" type="number" placeholder="Price" />
                {errors.price && touched.price ? (<div className={styles.error}>{errors.price}</div>) : null} 
            </div>
                        
            <div className={styles.fieldWrapper}>
                <Field className={styles.field} id="urgentPurchase" type="checkbox"
        name="urgentPurchase" />
                {errors.urgentPurchase && touched.urgentPurchase ? (<div className={styles.error}>{errors.urgentPurchase}</div>) : null} 
            </div>


            <button className={styles.submitBtn} type='submit'>Submit</button>
         </Form>
       )}
            </Formik>

        </div>
    )
 }

export default ShoppingForm