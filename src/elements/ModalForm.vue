<template>
    <form action="">
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Player: <strong>{{modal.title}}</strong></p>
            </header>
            <section class="modal-card-body">
                <b-field label="Email">
                    <b-input
                        type="email"
                        :value="modal.email"
                        placeholder="Your email"
                        required>
                    </b-input>
                </b-field>

                <b-field label="Password">
                    <b-input
                        type="password"
                        :value="modal.password"
                        placeholder="Your password"
                        required>
                    </b-input>
                </b-field>

                <b-checkbox>Remember me</b-checkbox>
            </section>
            <footer class="modal-card-foot is-right">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button class="button is-primary">Login</button>
            </footer>
        </div>
    </form>
</template>
<script>
export default {
    name: 'ModalForm',
    props: {
        modal: {
            title: {
                type: String
            }, 
            email: {
                type: String
            }, 
            password: {
                type: String
            }
        }
    }
}
</script>