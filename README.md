# Loogie Games website

This folder contains the static website for the browser game portal.

Run it from the `Website` folder so the site can load the exported Godot builds next to it:

```powershell
cd "M:\Projects\Loogie Games\Website"
python -m http.server 8080
```

Open `http://localhost:8080/` or `http://localhost:8080/Site/`.

The game exports used by the deployed site live inside this folder:

- `Website/Site/games/loogie-jump/Loogie Jump.html`
- `Website/Site/games/loogie-bridge/Loogie Bridge.html`

The original Godot exports can still live outside the site folder. Copy new exports
into the matching `Website/Site/games/...` folder before deploying updates.
