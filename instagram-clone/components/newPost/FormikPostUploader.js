import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Button, Divider } from 'react-native-elements'

const PLACEHOLDER_IMG = 'https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=400%2C400&ssl=1'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200,'Caption has reached the character limit.')
})

const FormikPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
        <>
          <View style={{
            margin: 20,
            justifyContent: 'space-between',
            flexDirection:'row'
          }}>
            <Image source={{ uri: thumbnailUrl?thumbnailUrl:PLACEHOLDER_IMG }} style={{width:100,height:100}} />
            <View style={{flex:1,marginLeft:12}}>
              <TextInput
                style={{color:'white',fontSize:20}}
                placeholder='Write a caption...'
                placeholderTextColor='grey'
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation='vertical' />
          <TextInput
              onChange={(e)=> setThumbnailUrl(e.nativeEvent.text)}
              style={{color:'white',fontSize:18}}
              placeholder='Enter Image URL'
              placeholderTextColor='grey'
              onChangeText={handleChange('imageUrl')}
              onBlur={handleBlur('imageUrl')}
              value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{fontsize:10, color:'red'}}>
              {errors.imageUrl}
            </Text>
          )}
          <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{width:'33%'}}>
              <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
            </View>
          </View>
        </>
      )}     
    </Formik>
  )
}

export default FormikPostUploader