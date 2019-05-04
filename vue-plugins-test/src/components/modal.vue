<template>
        <div class="modal"  v-if="visible">
        </div>
    </template>
    
    <script>
        export default {
            name: 'mymodal',
            props: {
                visible: {
                    type: Boolean,
                    default: false
                }
            }
        }
    </script>
    <style scoped>
        .modal {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
        }
    </style>