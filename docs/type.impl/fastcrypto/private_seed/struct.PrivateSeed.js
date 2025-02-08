(function() {
    var type_impls = Object.fromEntries([["fastcrypto",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsRef%3C%5Bu8%5D%3E-for-PrivateSeed%3CN,+B%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto/private_seed.rs.html#19-23\">Source</a><a href=\"#impl-AsRef%3C%5Bu8%5D%3E-for-PrivateSeed%3CN,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>, const B: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"fastcrypto/private_seed/struct.PrivateSeed.html\" title=\"struct fastcrypto::private_seed::PrivateSeed\">PrivateSeed</a>&lt;N, B&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto/private_seed.rs.html#20-22\">Source</a><a href=\"#method.as_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/convert/trait.AsRef.html#tymethod.as_ref\" class=\"fn\">as_ref</a>(&amp;self) -&gt; &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;[u8]\">ⓘ</a></h4></section></summary><div class='docblock'>Converts this type into a shared reference of the (usually inferred) input type.</div></details></div></details>","AsRef<[u8]>","fastcrypto::hmac::HmacKey","fastcrypto::hmac::HkdfIkm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-PrivateSeed%3CRECOMMENDED_LENGTH,+FIXED_LENGTH_ONLY%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto/private_seed.rs.html#12\">Source</a><a href=\"#impl-Debug-for-PrivateSeed%3CRECOMMENDED_LENGTH,+FIXED_LENGTH_ONLY%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const RECOMMENDED_LENGTH: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>, const FIXED_LENGTH_ONLY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"fastcrypto/private_seed/struct.PrivateSeed.html\" title=\"struct fastcrypto::private_seed::PrivateSeed\">PrivateSeed</a>&lt;RECOMMENDED_LENGTH, FIXED_LENGTH_ONLY&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto/private_seed.rs.html#12\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","fastcrypto::hmac::HmacKey","fastcrypto::hmac::HkdfIkm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-PrivateSeed%3CRECOMMENDED_LENGTH,+FIXED_LENGTH_ONLY%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto/private_seed.rs.html#12\">Source</a><a href=\"#impl-Drop-for-PrivateSeed%3CRECOMMENDED_LENGTH,+FIXED_LENGTH_ONLY%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const RECOMMENDED_LENGTH: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>, const FIXED_LENGTH_ONLY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"fastcrypto/private_seed/struct.PrivateSeed.html\" title=\"struct fastcrypto::private_seed::PrivateSeed\">PrivateSeed</a>&lt;RECOMMENDED_LENGTH, FIXED_LENGTH_ONLY&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto/private_seed.rs.html#12\">Source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.84.1/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","fastcrypto::hmac::HmacKey","fastcrypto::hmac::HkdfIkm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromUniformBytes%3CN%3E-for-PrivateSeed%3CN,+B%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto/private_seed.rs.html#17\">Source</a><a href=\"#impl-FromUniformBytes%3CN%3E-for-PrivateSeed%3CN,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>, const B: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"fastcrypto/traits/trait.FromUniformBytes.html\" title=\"trait fastcrypto::traits::FromUniformBytes\">FromUniformBytes</a>&lt;N&gt; for <a class=\"struct\" href=\"fastcrypto/private_seed/struct.PrivateSeed.html\" title=\"struct fastcrypto::private_seed::PrivateSeed\">PrivateSeed</a>&lt;N, B&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.generate\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto/traits.rs.html#380-384\">Source</a><a href=\"#method.generate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"fastcrypto/traits/trait.FromUniformBytes.html#method.generate\" class=\"fn\">generate</a>&lt;R: <a class=\"trait\" href=\"fastcrypto/traits/trait.AllowedRng.html\" title=\"trait fastcrypto::traits::AllowedRng\">AllowedRng</a>&gt;(rng: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.reference.html\">&amp;mut R</a>) -&gt; Self</h4></section></div></details>","FromUniformBytes<N>","fastcrypto::hmac::HmacKey","fastcrypto::hmac::HkdfIkm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-PrivateSeed%3CRECOMMENDED_LENGTH,+FIXED_LENGTH_ONLY%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto/private_seed.rs.html#12\">Source</a><a href=\"#impl-PartialEq-for-PrivateSeed%3CRECOMMENDED_LENGTH,+FIXED_LENGTH_ONLY%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const RECOMMENDED_LENGTH: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>, const FIXED_LENGTH_ONLY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"fastcrypto/private_seed/struct.PrivateSeed.html\" title=\"struct fastcrypto::private_seed::PrivateSeed\">PrivateSeed</a>&lt;RECOMMENDED_LENGTH, FIXED_LENGTH_ONLY&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto/private_seed.rs.html#12\">Source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"fastcrypto/private_seed/struct.PrivateSeed.html\" title=\"struct fastcrypto::private_seed::PrivateSeed\">PrivateSeed</a>&lt;RECOMMENDED_LENGTH, FIXED_LENGTH_ONLY&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.1/src/core/cmp.rs.html#261\">Source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","fastcrypto::hmac::HmacKey","fastcrypto::hmac::HkdfIkm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ToFromBytes-for-PrivateSeed%3CRECOMMENDED_LENGTH,+FIXED_LENGTH_ONLY%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto/private_seed.rs.html#25-40\">Source</a><a href=\"#impl-ToFromBytes-for-PrivateSeed%3CRECOMMENDED_LENGTH,+FIXED_LENGTH_ONLY%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const RECOMMENDED_LENGTH: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>, const FIXED_LENGTH_ONLY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"fastcrypto/traits/trait.ToFromBytes.html\" title=\"trait fastcrypto::traits::ToFromBytes\">ToFromBytes</a> for <a class=\"struct\" href=\"fastcrypto/private_seed/struct.PrivateSeed.html\" title=\"struct fastcrypto::private_seed::PrivateSeed\">PrivateSeed</a>&lt;RECOMMENDED_LENGTH, FIXED_LENGTH_ONLY&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto/private_seed.rs.html#28-35\">Source</a><a href=\"#method.from_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"fastcrypto/traits/trait.ToFromBytes.html#tymethod.from_bytes\" class=\"fn\">from_bytes</a>(bytes: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"enum\" href=\"fastcrypto/error/enum.FastCryptoError.html\" title=\"enum fastcrypto::error::FastCryptoError\">FastCryptoError</a>&gt;</h4></section></summary><div class='docblock'>Parse an object from its byte representation</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto/private_seed.rs.html#37-39\">Source</a><a href=\"#method.as_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"fastcrypto/traits/trait.ToFromBytes.html#method.as_bytes\" class=\"fn\">as_bytes</a>(&amp;self) -&gt; &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;[u8]\">ⓘ</a></h4></section></summary><div class='docblock'>Borrow a byte slice representing the serialized form of this object</div></details></div></details>","ToFromBytes","fastcrypto::hmac::HmacKey","fastcrypto::hmac::HkdfIkm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Zeroize-for-PrivateSeed%3CRECOMMENDED_LENGTH,+FIXED_LENGTH_ONLY%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto/private_seed.rs.html#12\">Source</a><a href=\"#impl-Zeroize-for-PrivateSeed%3CRECOMMENDED_LENGTH,+FIXED_LENGTH_ONLY%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const RECOMMENDED_LENGTH: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>, const FIXED_LENGTH_ONLY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; Zeroize for <a class=\"struct\" href=\"fastcrypto/private_seed/struct.PrivateSeed.html\" title=\"struct fastcrypto::private_seed::PrivateSeed\">PrivateSeed</a>&lt;RECOMMENDED_LENGTH, FIXED_LENGTH_ONLY&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.zeroize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto/private_seed.rs.html#12\">Source</a><a href=\"#method.zeroize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">zeroize</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Zero out this object from memory using Rust intrinsics which ensure the\nzeroization operation is not “optimized away” by the compiler.</div></details></div></details>","Zeroize","fastcrypto::hmac::HmacKey","fastcrypto::hmac::HkdfIkm"],["<section id=\"impl-Eq-for-PrivateSeed%3CRECOMMENDED_LENGTH,+FIXED_LENGTH_ONLY%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto/private_seed.rs.html#12\">Source</a><a href=\"#impl-Eq-for-PrivateSeed%3CRECOMMENDED_LENGTH,+FIXED_LENGTH_ONLY%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const RECOMMENDED_LENGTH: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>, const FIXED_LENGTH_ONLY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"fastcrypto/private_seed/struct.PrivateSeed.html\" title=\"struct fastcrypto::private_seed::PrivateSeed\">PrivateSeed</a>&lt;RECOMMENDED_LENGTH, FIXED_LENGTH_ONLY&gt;</h3></section>","Eq","fastcrypto::hmac::HmacKey","fastcrypto::hmac::HkdfIkm"],["<section id=\"impl-StructuralPartialEq-for-PrivateSeed%3CRECOMMENDED_LENGTH,+FIXED_LENGTH_ONLY%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto/private_seed.rs.html#12\">Source</a><a href=\"#impl-StructuralPartialEq-for-PrivateSeed%3CRECOMMENDED_LENGTH,+FIXED_LENGTH_ONLY%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const RECOMMENDED_LENGTH: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>, const FIXED_LENGTH_ONLY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"fastcrypto/private_seed/struct.PrivateSeed.html\" title=\"struct fastcrypto::private_seed::PrivateSeed\">PrivateSeed</a>&lt;RECOMMENDED_LENGTH, FIXED_LENGTH_ONLY&gt;</h3></section>","StructuralPartialEq","fastcrypto::hmac::HmacKey","fastcrypto::hmac::HkdfIkm"],["<section id=\"impl-ZeroizeOnDrop-for-PrivateSeed%3CRECOMMENDED_LENGTH,+FIXED_LENGTH_ONLY%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto/private_seed.rs.html#12\">Source</a><a href=\"#impl-ZeroizeOnDrop-for-PrivateSeed%3CRECOMMENDED_LENGTH,+FIXED_LENGTH_ONLY%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const RECOMMENDED_LENGTH: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>, const FIXED_LENGTH_ONLY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; ZeroizeOnDrop for <a class=\"struct\" href=\"fastcrypto/private_seed/struct.PrivateSeed.html\" title=\"struct fastcrypto::private_seed::PrivateSeed\">PrivateSeed</a>&lt;RECOMMENDED_LENGTH, FIXED_LENGTH_ONLY&gt;</h3></section>","ZeroizeOnDrop","fastcrypto::hmac::HmacKey","fastcrypto::hmac::HkdfIkm"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[17302]}