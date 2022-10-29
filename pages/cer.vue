<template>
    <div class="overflow-hidden">
        <div class="w-full bg-white h-full py-[500px] main-welcome overflow-hidden">
            <Container>
                <h1 class="anim-text-welcome text-center text-7xl font-semibold">ยินดีต้อนรับ สู่โลกแห่งวันพีช!!</h1>
            </Container>
        </div>
        <div>
            <!-- <a href="#_" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
<span class="relative">ย้อนกลับ</span>
</a> -->
            <Container>
                <div class="main">
                    <h1 class="text-5xl text-white font-semibold text-center text-title mt-25">ขี้เกียจทำ</h1>
                </div>
            </Container>
        </div>
    </div>
</template>
<script>
import Container from '~/components/container.vue';
export default{
    components: { Container },
    data() {
        return {};
    },
    methods: {
        load_anim(){
            // this.$nuxt.refresh()
            this.$gsap.to('.main .text-title',{
                opacity:0,
                position:"absolute",
                right:"0",
                left:"0",
                top:"-3rem"
            })

        },
        animation() {

            this.$gsap.to('.main-welcome .anim-text-welcome',{
                opacity:0
            })

            this.$gsap.to('.main-welcome',{
                opacity:1
            })
            
            this.$gsap.fromTo('.main-welcome .anim-text-welcome',5,{x:0},{opacity:1,delay:1, ease:  'SteppedEase.config(37)'})
            this.$gsap.fromTo('.main-welcome ',5,{x:0},{opacity:0,delay:6,ease:'SlowMo.ease'})
            this.$gsap.fromTo('.main .text-title',2,{x:0,},{x:-10,opacity:1,delay:9,})
        }
    },
    mounted() {
        this.animation()
        this.load_anim()
    },

    
}
</script>