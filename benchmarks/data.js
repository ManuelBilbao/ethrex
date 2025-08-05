window.BENCHMARK_DATA = {
  "lastUpdate": 1754431301759,
  "repoUrl": "https://github.com/ManuelBilbao/ethrex",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "mrugiero@gmail.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1802f66ed21aff9ca45056ad9a0a6a81b6a4a2b0",
          "message": "feat(l1): notebook for high-level profiling (#3633)\n\nIntroduce a new notebook to analyze contribution of eaxh part of the\nblock production process to its overall time, producing graphs for\nvisual clarity.\nInstructions included in the README.\n\nBased on #3274\nCoauthored-by: @Arkenan\n\nPart of: #3331",
          "timestamp": "2025-07-23T17:15:17Z",
          "tree_id": "90f55d482f41009e1f0aab974c2f11afaaef03e1",
          "url": "https://github.com/ManuelBilbao/ethrex/commit/1802f66ed21aff9ca45056ad9a0a6a81b6a4a2b0"
        },
        "date": 1753294966759,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 170102418870,
            "range": "± 1085317035",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47506558+MegaRedHand@users.noreply.github.com",
            "name": "Tomás Grüner",
            "username": "MegaRedHand"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "614cc6d0300718b727304672d93a2ddf6adaf21d",
          "message": "docs(l1): move install instructions to new section and embed script one-liner (#3505)\n\n**Motivation**\n\nSince the install script just builds from source using a `cargo install`\none-liner, it's preferable to show that instead of having to download\nand run an install script.\n\n**Description**\n\nThis PR removes the install script, embedding the one-liner inside the\ndocs. It also moves the installation instructions to the book, linking\nto it in the readme, and expands them with instructions on how to build\nfrom source or download the pre-built binaries.\n\n---------\n\nCo-authored-by: Manuel Iñaki Bilbao <manuel.bilbao@lambdaclass.com>",
          "timestamp": "2025-07-23T21:47:54Z",
          "tree_id": "0b46ef2d7f648cf19cf1c02cfa8af0c4501391a5",
          "url": "https://github.com/ManuelBilbao/ethrex/commit/614cc6d0300718b727304672d93a2ddf6adaf21d"
        },
        "date": 1753310581758,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 166773908340,
            "range": "± 311858619",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manuel.bilbao@lambdaclass.com",
            "name": "Manuel Iñaki Bilbao",
            "username": "ManuelBilbao"
          },
          "committer": {
            "email": "manuel.bilbao@lambdaclass.com",
            "name": "Manuel Iñaki Bilbao",
            "username": "ManuelBilbao"
          },
          "distinct": true,
          "id": "eb4cb3864cbe789bac984481a83664e7f28ea0a3",
          "message": "Improve error messages",
          "timestamp": "2025-08-05T17:48:53-03:00",
          "tree_id": "485b135d5d8e278a8b92a45f2969010d4fd89832",
          "url": "https://github.com/ManuelBilbao/ethrex/commit/eb4cb3864cbe789bac984481a83664e7f28ea0a3"
        },
        "date": 1754431299884,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 160802969274,
            "range": "± 260901662",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}