(function() {
    var type_impls = Object.fromEntries([["fastcrypto_zkp",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%26VerifyingKey%3CG1%3E%3E-for-PreparedVerifyingKey%3CG1%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto_zkp/groth16/mod.rs.html#57-69\">Source</a><a href=\"#impl-From%3C%26VerifyingKey%3CG1%3E%3E-for-PreparedVerifyingKey%3CG1%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G1&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"fastcrypto_zkp/groth16/struct.VerifyingKey.html\" title=\"struct fastcrypto_zkp::groth16::VerifyingKey\">VerifyingKey</a>&lt;G1&gt;&gt; for <a class=\"struct\" href=\"fastcrypto_zkp/groth16/struct.PreparedVerifyingKey.html\" title=\"struct fastcrypto_zkp::groth16::PreparedVerifyingKey\">PreparedVerifyingKey</a>&lt;G1&gt;<div class=\"where\">where\n    G1: <a class=\"trait\" href=\"fastcrypto/groups/trait.Pairing.html\" title=\"trait fastcrypto::groups::Pairing\">Pairing</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto_zkp/groth16/mod.rs.html#61-68\">Source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(vk: &amp;<a class=\"struct\" href=\"fastcrypto_zkp/groth16/struct.VerifyingKey.html\" title=\"struct fastcrypto_zkp::groth16::VerifyingKey\">VerifyingKey</a>&lt;G1&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<&VerifyingKey<G1>>","fastcrypto_zkp::bls12381::PreparedVerifyingKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PreparedVerifyingKey%3CG1%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto_zkp/groth16/api.rs.html#136-196\">Source</a><a href=\"#impl-PreparedVerifyingKey%3CG1%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G1: <a class=\"trait\" href=\"fastcrypto/groups/trait.Pairing.html\" title=\"trait fastcrypto::groups::Pairing\">Pairing</a>&gt; <a class=\"struct\" href=\"fastcrypto_zkp/groth16/struct.PreparedVerifyingKey.html\" title=\"struct fastcrypto_zkp::groth16::PreparedVerifyingKey\">PreparedVerifyingKey</a>&lt;G1&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.serialize_into_parts\" class=\"method\"><a class=\"src rightside\" href=\"src/fastcrypto_zkp/groth16/api.rs.html#137-151\">Source</a><h4 class=\"code-header\">pub fn <a href=\"fastcrypto_zkp/groth16/struct.PreparedVerifyingKey.html#tymethod.serialize_into_parts\" class=\"fn\">serialize_into_parts</a>&lt;const G1_SIZE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>, const G2_SIZE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>, const GT_SIZE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>&gt;(\n    &amp;self,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u8.html\">u8</a>&gt;&gt;<div class=\"where\">where\n    G1: <a class=\"trait\" href=\"fastcrypto/serde_helpers/trait.ToFromByteArray.html\" title=\"trait fastcrypto::serde_helpers::ToFromByteArray\">ToFromByteArray</a>&lt;G1_SIZE&gt;,\n    G1::<a class=\"associatedtype\" href=\"fastcrypto/groups/trait.Pairing.html#associatedtype.Other\" title=\"type fastcrypto::groups::Pairing::Other\">Other</a>: <a class=\"trait\" href=\"fastcrypto/serde_helpers/trait.ToFromByteArray.html\" title=\"trait fastcrypto::serde_helpers::ToFromByteArray\">ToFromByteArray</a>&lt;G2_SIZE&gt;,\n    &lt;G1 as <a class=\"trait\" href=\"fastcrypto/groups/trait.Pairing.html\" title=\"trait fastcrypto::groups::Pairing\">Pairing</a>&gt;::<a class=\"associatedtype\" href=\"fastcrypto/groups/trait.Pairing.html#associatedtype.Output\" title=\"type fastcrypto::groups::Pairing::Output\">Output</a>: <a class=\"trait\" href=\"fastcrypto_zkp/groth16/api/trait.GTSerialize.html\" title=\"trait fastcrypto_zkp::groth16::api::GTSerialize\">GTSerialize</a>&lt;GT_SIZE&gt;,</div></h4></section><section id=\"method.deserialize_from_parts\" class=\"method\"><a class=\"src rightside\" href=\"src/fastcrypto_zkp/groth16/api.rs.html#153-195\">Source</a><h4 class=\"code-header\">pub fn <a href=\"fastcrypto_zkp/groth16/struct.PreparedVerifyingKey.html#tymethod.deserialize_from_parts\" class=\"fn\">deserialize_from_parts</a>&lt;const G1_SIZE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>, const G2_SIZE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>, const GT_SIZE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>&gt;(\n    vk_gamma_abc_bytes: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u8.html\">u8</a>],\n    alpha_beta_bytes: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u8.html\">u8</a>],\n    gamma_neg_bytes: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u8.html\">u8</a>],\n    delta_neg_bytes: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u8.html\">u8</a>],\n) -&gt; <a class=\"type\" href=\"fastcrypto/error/type.FastCryptoResult.html\" title=\"type fastcrypto::error::FastCryptoResult\">FastCryptoResult</a>&lt;Self&gt;<div class=\"where\">where\n    G1: <a class=\"trait\" href=\"fastcrypto/serde_helpers/trait.ToFromByteArray.html\" title=\"trait fastcrypto::serde_helpers::ToFromByteArray\">ToFromByteArray</a>&lt;G1_SIZE&gt;,\n    G1::<a class=\"associatedtype\" href=\"fastcrypto/groups/trait.Pairing.html#associatedtype.Other\" title=\"type fastcrypto::groups::Pairing::Other\">Other</a>: <a class=\"trait\" href=\"fastcrypto/serde_helpers/trait.ToFromByteArray.html\" title=\"trait fastcrypto::serde_helpers::ToFromByteArray\">ToFromByteArray</a>&lt;G2_SIZE&gt;,\n    &lt;G1 as <a class=\"trait\" href=\"fastcrypto/groups/trait.Pairing.html\" title=\"trait fastcrypto::groups::Pairing\">Pairing</a>&gt;::<a class=\"associatedtype\" href=\"fastcrypto/groups/trait.Pairing.html#associatedtype.Output\" title=\"type fastcrypto::groups::Pairing::Output\">Output</a>: <a class=\"trait\" href=\"fastcrypto_zkp/groth16/api/trait.GTSerialize.html\" title=\"trait fastcrypto_zkp::groth16::api::GTSerialize\">GTSerialize</a>&lt;GT_SIZE&gt;,</div></h4></section></div></details>",0,"fastcrypto_zkp::bls12381::PreparedVerifyingKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PreparedVerifyingKey%3CG1%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto_zkp/groth16/mod.rs.html#71-123\">Source</a><a href=\"#impl-PreparedVerifyingKey%3CG1%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G1: <a class=\"trait\" href=\"fastcrypto/groups/trait.Pairing.html\" title=\"trait fastcrypto::groups::Pairing\">Pairing</a>&gt; <a class=\"struct\" href=\"fastcrypto_zkp/groth16/struct.PreparedVerifyingKey.html\" title=\"struct fastcrypto_zkp::groth16::PreparedVerifyingKey\">PreparedVerifyingKey</a>&lt;G1&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.verify\" class=\"method\"><a class=\"src rightside\" href=\"src/fastcrypto_zkp/groth16/mod.rs.html#74-85\">Source</a><h4 class=\"code-header\">pub fn <a href=\"fastcrypto_zkp/groth16/struct.PreparedVerifyingKey.html#tymethod.verify\" class=\"fn\">verify</a>(\n    &amp;self,\n    public_inputs: &amp;[G1::<a class=\"associatedtype\" href=\"fastcrypto/groups/trait.GroupElement.html#associatedtype.ScalarType\" title=\"type fastcrypto::groups::GroupElement::ScalarType\">ScalarType</a>],\n    proof: &amp;<a class=\"struct\" href=\"fastcrypto_zkp/groth16/struct.Proof.html\" title=\"struct fastcrypto_zkp::groth16::Proof\">Proof</a>&lt;G1&gt;,\n) -&gt; <a class=\"type\" href=\"fastcrypto/error/type.FastCryptoResult.html\" title=\"type fastcrypto::error::FastCryptoResult\">FastCryptoResult</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.unit.html\">()</a>&gt;<div class=\"where\">where\n    G1: <a class=\"trait\" href=\"fastcrypto/groups/trait.MultiScalarMul.html\" title=\"trait fastcrypto::groups::MultiScalarMul\">MultiScalarMul</a>,\n    &lt;G1 as <a class=\"trait\" href=\"fastcrypto/groups/trait.Pairing.html\" title=\"trait fastcrypto::groups::Pairing\">Pairing</a>&gt;::<a class=\"associatedtype\" href=\"fastcrypto/groups/trait.Pairing.html#associatedtype.Output\" title=\"type fastcrypto::groups::Pairing::Output\">Output</a>: <a class=\"trait\" href=\"fastcrypto/groups/trait.GroupElement.html\" title=\"trait fastcrypto::groups::GroupElement\">GroupElement</a>,</div></h4></section></summary><div class=\"docblock\"><p>Verify Groth16 proof using the prepared verifying key (see more at\n<a href=\"fastcrypto_zkp/bn254/verifier/struct.PreparedVerifyingKey.html\" title=\"struct fastcrypto_zkp::bn254::verifier::PreparedVerifyingKey\"><code>crate::bn254::verifier::PreparedVerifyingKey</code></a>), a vector of public inputs and the proof.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.verify_with_prepared_inputs\" class=\"method\"><a class=\"src rightside\" href=\"src/fastcrypto_zkp/groth16/mod.rs.html#90-107\">Source</a><h4 class=\"code-header\">pub fn <a href=\"fastcrypto_zkp/groth16/struct.PreparedVerifyingKey.html#tymethod.verify_with_prepared_inputs\" class=\"fn\">verify_with_prepared_inputs</a>(\n    &amp;self,\n    prepared_inputs: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.reference.html\">&amp;G1</a>,\n    proof: &amp;<a class=\"struct\" href=\"fastcrypto_zkp/groth16/struct.Proof.html\" title=\"struct fastcrypto_zkp::groth16::Proof\">Proof</a>&lt;G1&gt;,\n) -&gt; <a class=\"type\" href=\"fastcrypto/error/type.FastCryptoResult.html\" title=\"type fastcrypto::error::FastCryptoResult\">FastCryptoResult</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.unit.html\">()</a>&gt;<div class=\"where\">where\n    &lt;G1 as <a class=\"trait\" href=\"fastcrypto/groups/trait.Pairing.html\" title=\"trait fastcrypto::groups::Pairing\">Pairing</a>&gt;::<a class=\"associatedtype\" href=\"fastcrypto/groups/trait.Pairing.html#associatedtype.Output\" title=\"type fastcrypto::groups::Pairing::Output\">Output</a>: <a class=\"trait\" href=\"fastcrypto/groups/trait.GroupElement.html\" title=\"trait fastcrypto::groups::GroupElement\">GroupElement</a>,</div></h4></section></summary><div class=\"docblock\"><p>Verify Groth16 proof using the prepared verifying key (see more at\n<a href=\"fastcrypto_zkp/bn254/verifier/struct.PreparedVerifyingKey.html\" title=\"struct fastcrypto_zkp::bn254::verifier::PreparedVerifyingKey\"><code>crate::bn254::verifier::PreparedVerifyingKey</code></a>), a prepared public input (see\n[<code>prepare_inputs</code>]) and the proof.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prepare_inputs\" class=\"method\"><a class=\"src rightside\" href=\"src/fastcrypto_zkp/groth16/mod.rs.html#110-122\">Source</a><h4 class=\"code-header\">pub fn <a href=\"fastcrypto_zkp/groth16/struct.PreparedVerifyingKey.html#tymethod.prepare_inputs\" class=\"fn\">prepare_inputs</a>(\n    &amp;self,\n    public_inputs: &amp;[G1::<a class=\"associatedtype\" href=\"fastcrypto/groups/trait.GroupElement.html#associatedtype.ScalarType\" title=\"type fastcrypto::groups::GroupElement::ScalarType\">ScalarType</a>],\n) -&gt; <a class=\"type\" href=\"fastcrypto/error/type.FastCryptoResult.html\" title=\"type fastcrypto::error::FastCryptoResult\">FastCryptoResult</a>&lt;G1&gt;<div class=\"where\">where\n    G1: <a class=\"trait\" href=\"fastcrypto/groups/trait.MultiScalarMul.html\" title=\"trait fastcrypto::groups::MultiScalarMul\">MultiScalarMul</a>,</div></h4></section></summary><div class=\"docblock\"><p>Prepare the public inputs for use in [<code>verify_with_prepared_inputs</code>].</p>\n</div></details></div></details>",0,"fastcrypto_zkp::bls12381::PreparedVerifyingKey"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[12822]}