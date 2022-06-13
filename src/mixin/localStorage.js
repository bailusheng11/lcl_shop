import localStorage from '@/utils/localStorage'

const storage = {
    data() {
        return {
            token: "",
            id:""
        }
    },
    mounted() {
        this.$nextTick(() => {
            const res = localStorage.getToken('token')
            this.token = res.token;
            this.id = res.id;
        })

    }
}

export default storage