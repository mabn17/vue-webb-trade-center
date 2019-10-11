import OrButtons from '@/components/Bottons/OrButtons.vue';

export default {
  name: 'DefaultHome',
  components: {
    OrButtons,
  },

  methods: {
    about() { this.$router.push('/about') },
    register() { this.$router.push('/register'); },
  },
};
