<script lang="ts">
  import { form, field } from "svelte-forms";
  import { required } from "svelte-forms/validators";

  const username = field("username", "", [required()]);
  const email = field("email", "", [required()]);
  const user_form = form(username, email);

  const jira_username = field("jira_username", "", []);
  const jira_password = field("jira_password", "", []);
  const jira_server = field("jira_server", "", []);
  const jira_form = form(jira_username, jira_password, jira_server);

  function connect_jira(evt: Event) {
    evt.preventDefault();
    console.log(jira_form);
  }
</script>

<div class="container-fluid">
  <h3>Profile</h3>
  <div class="grid">
    <div class="container-fluid">
      <form>
        <h5>User Profile</h5>
        <label for="username">
          Username
          <input
            type="text"
            bind:value={$username.value}
            id="username"
            name="username"
            required
          />
        </label>
        <label for="email">
          Email
          <input
            type="text"
            bind:value={$email.value}
            id="email"
            name="email"
            required
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
    <div class="conainer-fluid">
      <form method="POST" action="?/connectJira">
        <h5>Jira Connection</h5>
        <div class="grid">
          <label for="jira_username">
            Jira Username
            <input
              type="text"
              bind:value={$jira_username.value}
              id="jira_username"
              name="jira_username"
            />
          </label>
          <label for="jira_password">
            Jira Password
            <input
              type="password"
              bind:value={$jira_password.value}
              id="jira_password"
              name="jira_password"
            />
          </label>
        </div>
        <label for="jira_server">
          Jira Server
          <input
            type="text"
            bind:value={$jira_server.value}
            id="jira_server"
            name="jira_server"
          />
        </label>
        <button
          on:submit={connect_jira}
          type="submit"
          disabled={!$jira_form.valid}>Connect Jira</button
        >
      </form>
    </div>
  </div>
</div>
