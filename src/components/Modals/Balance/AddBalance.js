import Input from '@/components/Form/Input.vue';
import ApiClient from '@/api/client.js';
import SimpleVueValidator from 'simple-vue-validator';
import Validations from '@/models/Validations/FormValidations';

export default {
  name: 'DefaultBalance',
  components: {
    Input,
  },

  methods: {
    Api: () => ApiClient,
    VueValidator: () => SimpleVueValidator,
    Validation: () => Validations,
  },

};
