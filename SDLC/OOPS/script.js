//ENCAPSULATION


// class User {
//   #password; // private field

//   constructor(username, password) {
//     this.username = username;
//     this.#password = password;
//   }

//   checkPassword(input) {
//     return this.#password === input;
//   }
// }

// const u1 = new User("admin", "secure123");
// console.log(u1.checkPassword("secure123")); // true


// import crypto from "crypto";

// class User {
//   #passwordHash;

//   constructor(username, password) {
//     this.username = username;
//     this.#passwordHash = crypto
//       .createHash("sha256")
//       .update(password)
//       .digest("hex");
//   }

//   checkPassword(input) {
//     const hash = crypto
//       .createHash("sha256")
//       .update(input)
//       .digest("hex");

//     return hash === this.#passwordHash;
//   }
// }

// const u1 = new User("admin", "secure123");
// console.log(u1.checkPassword("secure123"));

// class Payment {
//   process(amount) {
//     this.#validate();
//     this.#deduct(amount);
//     this.#confirm();
//   }

//   #validate() {
//     console.log("Validating payment...");
//   }

//   #deduct(amount) {
//     console.log(`Deducting ₹${amount}`);
//   }

//   #confirm() {
//     console.log("Payment successful");
//   }
// }

// const pay = new Payment();
// pay.process(500);

//2.ABSTRACT

class Payment {
  #productPrice;
  #currency = "INR";

  constructor(productPrice) {
    this.#productPrice = productPrice;
  }

  process(paidAmount) {
    try {
      this.#validateAmount(paidAmount);
      this.#deduct(paidAmount);
      this.#confirm(paidAmount);
    } catch (error) {
      console.error("❌ Payment Failed:", error.message);
    }
  }

  // Validate paid amount against product price
  #validateAmount(paidAmount) {
    if (typeof paidAmount !== "number" || paidAmount <= 0) {
      throw new Error("Invalid payment amount");
    }

    if (paidAmount < this.#productPrice) {
      throw new Error(
        `Insufficient amount. Product price is ₹${this.#productPrice}`
      );
    }

    if (paidAmount > this.#productPrice) {
      throw new Error(
        `Excess amount detected. Expected ₹${this.#productPrice}`
      );
    }

    console.log("✅ Payment amount verified");
  }

  // Simulate deduction
  #deduct(amount) {
    console.log(`💳 Deducting ₹${amount} ${this.#currency}`);
  }

  // Final confirmation
  #confirm(amount) {
    console.log(`🎉 Payment of ₹${amount} successful`);
  }
}

// Usage
const payment = new Payment(500);
payment.process(500);   // ✅ Success
payment.process(300);   // ❌ Insufficient
payment.process(700);   // ❌ Excess
