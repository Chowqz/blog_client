<template>
    <div>
        <ul class="list">
            <li class="list-item">
                <h3>title1</h3>
                <div>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                </div>
            </li>
            <li class="list-item">
                <h3>title2</h3>
                <div>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                </div>
            </li>
            <li class="list-item">
                <h3>title3</h3>
                <div>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                </div>
            </li>
            <li class="list-item">
                <h3>title4</h3>
                <div>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               
            }
        },
        created() {

        },
        mounted() {
            // document.querySelector('.list').addEventListener('click', e => {
            //     if(e.target.tagName === 'H3') {
            //         if(document.querySelector('.list-item-active')) {
            //             document.querySelector('.list-item-active').classList.remove('list-item-active');
            //         }
            //         e.target.parentNode.classList.add('list-item-active')
            //     }
            // })
        },
        methods: {
            
        }
    }
</script>

<style scoped>
.list{
    width: 400px;
    border: 1px solid red;
}
.list-item h3{
    height: 40px;
    font-size: 20px;
    background-color: red;
    cursor: pointer;
    border: 1px solid #fff;
}
.list-item div{
    max-height: 1px;
    min-height: 1px;
    background-color: #fff;
    line-height: 24px;
    overflow: hidden;
    transition: all 0.5s;
}
.list-item div p {
    font-size: 16px;
    line-height: 24px;
}
.list-item:hover div{
    max-height: 1000px;
}

.list-item-active div{
    max-height: 1000px;
    transition: all 0.5s;
}

</style>