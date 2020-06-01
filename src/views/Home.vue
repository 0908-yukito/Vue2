<template>
 <div class="home">
   <button @click="add"></button>
 </div>
</template>
<script>
import firebase from "firebase";
export default {
  methods: {
    add() {
var db = firebase.firestore();
db.collection("users")
.add({
  name:"太郎",
  age: 20
})
.then(doc => {
  console.log(doc);
});
    }
  }
};
</script>
