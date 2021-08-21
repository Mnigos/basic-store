<template>
  <v-container class="d-flex">
    <v-row>
      <v-col width="20%">
        <div class="d-flex justify-space-around">
          <v-title><h1>Your Cart(1)</h1></v-title>
          <v-btn color="primary">Clear</v-btn>
        </div>
        <div>
          <card-item title="Aligator Haze" price=69 img-src="https://a.allegroimg.com/s1024/0cce55/71e4c3b240d688d3cf0b084567e4"/>
        </div>
      </v-col>
      <v-col>
        <v-card width="50%">
          <v-card-title>To Pay $200</v-card-title>
          <v-card-actions>
            <v-btn color="primary">Pay</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
