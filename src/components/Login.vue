<script setup>

//prevent login button from working
const handleLogin = (e) => {
    e.preventDefault(); // Stop page reload
    const token = document.getElementById("token").value;
    console.log("Token:", token); // Replace with real login logic
};

</script>

<template>
    <div class="login-container">
        <h1 class="title has-text-left">Login</h1>
        <form id="loginForm" @submit="handleLogin">
            <!-- Username Field -->
            <div class="field">
                <label class="label" for="username">Username</label>
                <div class="control">
                    <input class="input" type="text" id="username" name="username" placeholder="your.name@gmail.com"
                        readonly>
                </div>
            </div>

            <!-- Password Field -->
            <div class="field">
                <label class="label" for="password">Password</label>
                <div class="control">
                    <input class="input" type="password" id="password" name="password" placeholder="password" readonly>
                </div>
            </div>

            <!-- Token Field -->
            <div class="field">
                <label class="label" for="token">Token</label>
                <div class="control">
                    <input class="input" type="text" id="token" name="token" placeholder="Your account token" required>
                </div>
            </div>

            <!-- Submit Button -->
            <div class="field is-grouped is-grouped-centered">
                <div class="control">
                    <button type="submit" class="button is-primary">Login</button>
                </div>
            </div>
        </form>
    </div>
</template>