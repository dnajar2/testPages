<template>
    <div>Home
        <Traffic v-slot="{on, setGreen, setYellow, setRed}">
            <div class="traffic">
                <h3>Traffic App</h3>
                <h4 :style="{color: on}">Current Color: {{on}}</h4>
                <Light style="width: 20%"
                       :red="on === 'Red' ? red: redDefault"
                       :green="on === 'Green' ? green: greenDefault"
                       :yellow="on === 'Yellow' ? yellow: yellowDefault"

                />
                <button @click="setRed">Set Red</button>
                <button @click="setYellow">Set Yellow</button>
                <button @click="setGreen">Set Green</button>
            </div>
        </Traffic>
    </div>
</template>

<script>
    import Traffic from "@/components/Traffic";
    import Light from "@/components/Light";

    export default {
        name: "Home",
        components: {Light, Traffic},
        data: () => ({
            red: '#F50A0A',
            yellow: '#FFBC00',
            green: '#00FF5E',
            redDefault: '#EE8989',
            greenDefault: '#95C7A8',
            yellowDefault: '#fcff91'
        }),

    }
</script>

<style scoped>
    .traffic {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
