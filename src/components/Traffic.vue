<script>
    export default {
        name: "Traffic",
        data: () => ({
            lightColor: 'Green'
        }),
        methods: {
            setGreen() {
                this.lightColor = 'Green'
            },
            setYellow() {
                this.lightColor = 'Yellow'
            },
            setRed() {
                this.lightColor = 'Red'
            },
            runLight() {
                let self = this
                let func = null
                let time = null
                switch (this.lightColor) {
                    case "Red":
                        func = this.setGreen.bind({})
                        time = 3000
                        break
                    case "Green":
                        func = this.setYellow.bind({})
                        time = 4000
                        break
                    case "Yellow":
                        func = this.setRed.bind({})
                        time = 1000
                        break
                }
                setTimeout(function(){
                    func()
                    self.runLight()
                }, time)
            }
        },
        render() {
            return this.$scopedSlots.default({
                on: this.lightColor,
                setGreen: this.setGreen,
                setYellow: this.setYellow,
                setRed: this.setRed
            })
        },
        mounted() {
            this.runLight()
        }
    }
</script>

<style scoped>

</style>
