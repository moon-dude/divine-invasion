command:
browserify src/main.ts lib/require.js lib/three.js -p [ tsify --noImplicitAny ] > bundle.js

tsc -p c:\Users\alpha\dev\divinejs\tsconfig.json --watch

watchify out/main.js lib/require.js lib/three.js -o bundle.js

npm run-script tsc
npm run-script watch
node server.js
http://localhost:8080/

https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


TODO:
- demon permadeath
- save/load
- player skills?
- player control friendly demons
- shop?? (Or just have demon negotiation be the shop)
- more back and forth in negotiation.
