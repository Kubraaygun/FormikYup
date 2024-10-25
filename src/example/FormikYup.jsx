import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {Input, Button} from '@ui-kitten/components';
import * as Yup from 'yup';

const FormikYup = () => {
  const registerSchema = Yup.object().shape({
    name: Yup.string().required('Zorunlu Alan'),
    surname: Yup.string().required('Zorunlu Alan'),
    email: Yup.string()
      .required('Zorunlu Alan')
      .email('Lütfen geçerli bir email adresi giriniz.!!'),
    phone: Yup.number().required('Zorunlu Alan'),
    password: Yup.string().required('Zorunlu Alan'),
    passwordConfirm: Yup.string().required('Zorunlu Alan'),
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
          backgroundColor: '#00E096',
          minHeight: 125,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          KAYIT OLUŞTUR
        </Text>
      </View>

      <View style={{flex: 1, padding: 10}}>
        <ScrollView>
          <Formik
            initialValues={{
              email: '',
              name: '',
              surname: '',
              phone: '',
              password: '',
              passwordConfirm: '',
            }}
            validationSchema={registerSchema}
            onSubmit={values => console.log(values)}>
            {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
              <View>
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.name}
                  label={'İsim:'}
                  placeholder="Isim bilgisi giriniz.."
                  onChangeText={handleChange('name')}
                  status={errors.name ? 'danger' : 'basic'}
                  caption={errors.name}
                />

                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.surname}
                  label={'Soyisim:'}
                  placeholder="Soyisim bilgisi giriniz.."
                  onChangeText={handleChange('surname')}
                  status={errors.surname ? 'danger' : 'basic'}
                  caption={errors.surname}
                />

                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.email}
                  label={'E-mail:'}
                  placeholder="E-mail bilgisi giriniz.."
                  onChangeText={handleChange('email')}
                  status={errors.email ? 'danger' : 'basic'}
                  caption={errors.email}
                />

                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.phone}
                  label={'Tel:'}
                  placeholder="Telefon bilgisi giriniz.."
                  onChangeText={handleChange('phone')}
                  status={errors.phone ? 'danger' : 'basic'}
                  caption={errors.phone}
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.password}
                  label={'Şifre:'}
                  placeholder="Şifre bilgisi giriniz.."
                  onChangeText={handleChange('password')}
                  status={errors.password ? 'danger' : 'basic'}
                  caption={errors.password}
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.passwordConfirm}
                  label={'Şifre Tekrar:'}
                  placeholder="Şifre tekrarını giriniz.."
                  onChangeText={handleChange('passwordConfirm')}
                  status={errors.passwordConfirm ? 'danger' : 'basic'}
                  caption={errors.passwordConfirm}
                />

                <Button
                  style={{marginTop: 30}}
                  onPress={handleSubmit}
                  status="success">
                  {' '}
                  KAYDET
                </Button>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
};

export default FormikYup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
