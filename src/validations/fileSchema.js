import * as yup from "yup";
/**
 * validation params
 * This object defines the validation that must be done uploading files
 * @requires yup
 */
// const MAX_FILE_SIZE = 500000;
// const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const fileSchema = yup.object().shape({
    file: yup.mixed()
      .test('required', "You need to provide a file", (value) =>{
        return value && value.length
      } )
      .test("fileSize", "The file is too large", (value, context) => {
        return value && value[0] && value[0].size <= 200000;
      })
      .test('fileType', 'Solo admitimos archivos CSV', (value) => {
        if (!value || !value[0]) {
          return false;
        }
        
        const fileName = value[0].name;
        const fileExtension = fileName.split('.').pop().toLowerCase();
        return fileExtension === 'csv';
      }),
      // .test("type", "We only support csv", function (value) {
      //   return value && value[0] && value[0].type === "file/csv";
      // }),
  });