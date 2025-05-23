.PHONY: sp1

# Execution only
ifdef BLOCK_NUMBER
sp1:
	SP1_PROVER=cpu cargo r -r --features sp1 -- --rpc-url ${RPC_URL} --block-number ${BLOCK_NUMBER}
sp1-gpu:
	SP1_PROVER=cuda cargo r -r --features "sp1,gpu" -- --rpc-url ${RPC_URL} --block-number ${BLOCK_NUMBER}
risc0:
	cargo r -r --no-default-features --features risc0 -- --rpc-url ${RPC_URL} --block-number ${BLOCK_NUMBER}
risc0-gpu:
	cargo r -r --no-default-features --features "risc0,gpu" -- --rpc-url ${RPC_URL} --block-number ${BLOCK_NUMBER}
pico:
	cargo +nightly r -r --features pico -- --rpc-url ${RPC_URL} --block-number ${BLOCK_NUMBER}
pico-gpu:
	cargo +nightly r -r --features "pico,gpu" -- --rpc-url ${RPC_URL} --block-number ${BLOCK_NUMBER}
else
sp1:
	SP1_PROVER=cpu cargo r -r --features sp1 -- --rpc-url ${RPC_URL}
sp1-gpu:
	SP1_PROVER=cuda cargo r -r --features "sp1,gpu" -- --rpc-url ${RPC_URL}
risc0:
	cargo r -r --no-default-features --features risc0 -- --rpc-url ${RPC_URL}
risc0-gpu:
	cargo r -r --no-default-features --features "risc0,gpu" -- --rpc-url ${RPC_URL}
pico:
	cargo +nightly r -r --features pico -- --rpc-url ${RPC_URL}
pico-gpu:
	cargo +nightly r -r --features "pico,gpu" -- --rpc-url ${RPC_URL}
endif

# Proving
ifdef BLOCK_NUMBER
prove-sp1:
	SP1_PROVER=cpu cargo r -r --features sp1 -- --rpc-url ${RPC_URL} --prove --block-number ${BLOCK_NUMBER}
prove-sp1-gpu:
	SP1_PROVER=cuda cargo r -r --features "sp1,gpu" -- --rpc-url ${RPC_URL} --prove --block-number ${BLOCK_NUMBER}
prove-sp1-gpu-ci:
	SP1_PROVER=cuda cargo r -r --features "sp1,gpu,ci" -- --rpc-url ${RPC_URL} --prove --block-number ${BLOCK_NUMBER}
prove-risc0:
	cargo r -r --no-default-features --features risc0 -- --rpc-url ${RPC_URL} --prove --block-number ${BLOCK_NUMBER}
prove-risc0-gpu:
	cargo r -r --no-default-features --features "risc0,gpu" -- --rpc-url ${RPC_URL} --prove --block-number ${BLOCK_NUMBER}
pico:
	cargo +nightly r -r --features pico -- --rpc-url ${RPC_URL} --prove --block-number ${BLOCK_NUMBER}
pico-gpu:
	cargo +nightly r -r --features "pico,gpu" -- --rpc-url ${RPC_URL} --prove --block-number ${BLOCK_NUMBER}
else
prove-sp1:
	SP1_PROVER=cpu cargo r -r --features sp1 -- --rpc-url ${RPC_URL} --prove
prove-sp1-gpu:
	SP1_PROVER=cuda cargo r -r --features "sp1,gpu" -- --rpc-url ${RPC_URL} --prove
prove-risc0:
	cargo r -r --no-default-features --features risc0 -- --rpc-url ${RPC_URL} --prove
prove-risc0-gpu:
	cargo r -r --no-default-features --features "risc0,gpu" -- --rpc-url ${RPC_URL} --prove
pico:
	cargo +nightly r -r --features pico -- --rpc-url ${RPC_URL} --prove
pico-gpu:
	cargo +nightly r -r --features "pico,gpu" -- --rpc-url ${RPC_URL} --prove
endif
