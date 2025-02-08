(function() {
    var type_impls = Object.fromEntries([["fastcrypto_tbls",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AddAssign%3C%26Poly%3CC%3E%3E-for-Poly%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#47-55\">Source</a><a href=\"#impl-AddAssign%3C%26Poly%3CC%3E%3E-for-Poly%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C: GroupElement&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;&amp;<a class=\"struct\" href=\"fastcrypto_tbls/polynomial/struct.Poly.html\" title=\"struct fastcrypto_tbls::polynomial::Poly\">Poly</a>&lt;C&gt;&gt; for <a class=\"struct\" href=\"fastcrypto_tbls/polynomial/struct.Poly.html\" title=\"struct fastcrypto_tbls::polynomial::Poly\">Poly</a>&lt;C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.add_assign\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#48-54\">Source</a><a href=\"#method.add_assign\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/ops/arith/trait.AddAssign.html#tymethod.add_assign\" class=\"fn\">add_assign</a>(&amp;mut self, other: &amp;Self)</h4></section></summary><div class='docblock'>Performs the <code>+=</code> operation. <a href=\"https://doc.rust-lang.org/1.84.1/core/ops/arith/trait.AddAssign.html#tymethod.add_assign\">Read more</a></div></details></div></details>","AddAssign<&Poly<C>>","fastcrypto_tbls::polynomial::PrivatePoly","fastcrypto_tbls::polynomial::PublicPoly"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Poly%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#24\">Source</a><a href=\"#impl-Clone-for-Poly%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"fastcrypto_tbls/polynomial/struct.Poly.html\" title=\"struct fastcrypto_tbls::polynomial::Poly\">Poly</a>&lt;C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#24\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"fastcrypto_tbls/polynomial/struct.Poly.html\" title=\"struct fastcrypto_tbls::polynomial::Poly\">Poly</a>&lt;C&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.1/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","fastcrypto_tbls::polynomial::PrivatePoly","fastcrypto_tbls::polynomial::PublicPoly"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Poly%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#24\">Source</a><a href=\"#impl-Debug-for-Poly%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"fastcrypto_tbls/polynomial/struct.Poly.html\" title=\"struct fastcrypto_tbls::polynomial::Poly\">Poly</a>&lt;C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#24\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","fastcrypto_tbls::polynomial::PrivatePoly","fastcrypto_tbls::polynomial::PublicPoly"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-Poly%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#24\">Source</a><a href=\"#impl-Deserialize%3C'de%3E-for-Poly%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, C&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"fastcrypto_tbls/polynomial/struct.Poly.html\" title=\"struct fastcrypto_tbls::polynomial::Poly\">Poly</a>&lt;C&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#24\">Source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(__deserializer: __D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, __D::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","fastcrypto_tbls::polynomial::PrivatePoly","fastcrypto_tbls::polynomial::PublicPoly"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVec%3CC%3E%3E-for-Poly%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#41-45\">Source</a><a href=\"#impl-From%3CVec%3CC%3E%3E-for-Poly%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;C&gt;&gt; for <a class=\"struct\" href=\"fastcrypto_tbls/polynomial/struct.Poly.html\" title=\"struct fastcrypto_tbls::polynomial::Poly\">Poly</a>&lt;C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#42-44\">Source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(c: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;C&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vec<C>>","fastcrypto_tbls::polynomial::PrivatePoly","fastcrypto_tbls::polynomial::PublicPoly"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Poly%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#24\">Source</a><a href=\"#impl-PartialEq-for-Poly%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"fastcrypto_tbls/polynomial/struct.Poly.html\" title=\"struct fastcrypto_tbls::polynomial::Poly\">Poly</a>&lt;C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#24\">Source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"fastcrypto_tbls/polynomial/struct.Poly.html\" title=\"struct fastcrypto_tbls::polynomial::Poly\">Poly</a>&lt;C&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.1/src/core/cmp.rs.html#261\">Source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","fastcrypto_tbls::polynomial::PrivatePoly","fastcrypto_tbls::polynomial::PublicPoly"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Poly%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#195-215\">Source</a><a href=\"#impl-Poly%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C: Scalar&gt; <a class=\"struct\" href=\"fastcrypto_tbls/polynomial/struct.Poly.html\" title=\"struct fastcrypto_tbls::polynomial::Poly\">Poly</a>&lt;C&gt;</h3></section></summary><div class=\"docblock\"><p>Scalar operations.</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.rand\" class=\"method\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#199-202\">Source</a><h4 class=\"code-header\">pub fn <a href=\"fastcrypto_tbls/polynomial/struct.Poly.html#tymethod.rand\" class=\"fn\">rand</a>&lt;R: AllowedRng&gt;(degree: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u16.html\">u16</a>, rng: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.reference.html\">&amp;mut R</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Returns a new polynomial of the given degree where each coefficients is\nsampled at random from the given RNG.\nIn the context of secret sharing, the threshold is the degree + 1.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.commit\" class=\"method\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#206-214\">Source</a><h4 class=\"code-header\">pub fn <a href=\"fastcrypto_tbls/polynomial/struct.Poly.html#tymethod.commit\" class=\"fn\">commit</a>&lt;P: GroupElement&lt;ScalarType = C&gt;&gt;(&amp;self) -&gt; <a class=\"struct\" href=\"fastcrypto_tbls/polynomial/struct.Poly.html\" title=\"struct fastcrypto_tbls::polynomial::Poly\">Poly</a>&lt;P&gt;</h4></section></summary><div class=\"docblock\"><p>Commits the scalar polynomial to the group and returns a polynomial over\nthe group.</p>\n</div></details></div></details>",0,"fastcrypto_tbls::polynomial::PrivatePoly","fastcrypto_tbls::polynomial::PublicPoly"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Poly%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#32-39\">Source</a><a href=\"#impl-Poly%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C&gt; <a class=\"struct\" href=\"fastcrypto_tbls/polynomial/struct.Poly.html\" title=\"struct fastcrypto_tbls::polynomial::Poly\">Poly</a>&lt;C&gt;</h3></section></summary><div class=\"docblock\"><p>Vector related operations.</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.degree\" class=\"method\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#34-38\">Source</a><h4 class=\"code-header\">pub fn <a href=\"fastcrypto_tbls/polynomial/struct.Poly.html#tymethod.degree\" class=\"fn\">degree</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the degree of the polynomial</p>\n</div></details></div></details>",0,"fastcrypto_tbls::polynomial::PrivatePoly","fastcrypto_tbls::polynomial::PublicPoly"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Poly%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#59-191\">Source</a><a href=\"#impl-Poly%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C: GroupElement&gt; <a class=\"struct\" href=\"fastcrypto_tbls/polynomial/struct.Poly.html\" title=\"struct fastcrypto_tbls::polynomial::Poly\">Poly</a>&lt;C&gt;</h3></section></summary><div class=\"docblock\"><p>GroupElement operations.</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.zero\" class=\"method\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#61-63\">Source</a><h4 class=\"code-header\">pub fn <a href=\"fastcrypto_tbls/polynomial/struct.Poly.html#tymethod.zero\" class=\"fn\">zero</a>() -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Returns a polynomial with the zero element.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.eval\" class=\"method\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#70-83\">Source</a><h4 class=\"code-header\">pub fn <a href=\"fastcrypto_tbls/polynomial/struct.Poly.html#tymethod.eval\" class=\"fn\">eval</a>(&amp;self, i: <a class=\"type\" href=\"fastcrypto_tbls/types/type.ShareIndex.html\" title=\"type fastcrypto_tbls::types::ShareIndex\">ShareIndex</a>) -&gt; <a class=\"type\" href=\"fastcrypto_tbls/polynomial/type.Eval.html\" title=\"type fastcrypto_tbls::polynomial::Eval\">Eval</a>&lt;C&gt;</h4></section></summary><div class=\"docblock\"><p>Evaluates the polynomial at the specified value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.verify_share\" class=\"method\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#172-180\">Source</a><h4 class=\"code-header\">pub fn <a href=\"fastcrypto_tbls/polynomial/struct.Poly.html#tymethod.verify_share\" class=\"fn\">verify_share</a>(\n    &amp;self,\n    idx: <a class=\"type\" href=\"fastcrypto_tbls/types/type.ShareIndex.html\" title=\"type fastcrypto_tbls::types::ShareIndex\">ShareIndex</a>,\n    share: &amp;C::ScalarType,\n) -&gt; FastCryptoResult&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Checks if a given share is valid.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.c0\" class=\"method\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#183-185\">Source</a><h4 class=\"code-header\">pub fn <a href=\"fastcrypto_tbls/polynomial/struct.Poly.html#tymethod.c0\" class=\"fn\">c0</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.reference.html\">&amp;C</a></h4></section></summary><div class=\"docblock\"><p>Return the constant term of the polynomial.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_vec\" class=\"method\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#188-190\">Source</a><h4 class=\"code-header\">pub fn <a href=\"fastcrypto_tbls/polynomial/struct.Poly.html#tymethod.as_vec\" class=\"fn\">as_vec</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;C&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the coefficients of the polynomial.</p>\n</div></details></div></details>",0,"fastcrypto_tbls::polynomial::PrivatePoly","fastcrypto_tbls::polynomial::PublicPoly"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Poly%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#24\">Source</a><a href=\"#impl-Serialize-for-Poly%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"fastcrypto_tbls/polynomial/struct.Poly.html\" title=\"struct fastcrypto_tbls::polynomial::Poly\">Poly</a>&lt;C&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#24\">Source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(&amp;self, __serializer: __S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;__S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, __S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","fastcrypto_tbls::polynomial::PrivatePoly","fastcrypto_tbls::polynomial::PublicPoly"],["<section id=\"impl-Eq-for-Poly%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#24\">Source</a><a href=\"#impl-Eq-for-Poly%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"fastcrypto_tbls/polynomial/struct.Poly.html\" title=\"struct fastcrypto_tbls::polynomial::Poly\">Poly</a>&lt;C&gt;</h3></section>","Eq","fastcrypto_tbls::polynomial::PrivatePoly","fastcrypto_tbls::polynomial::PublicPoly"],["<section id=\"impl-StructuralPartialEq-for-Poly%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto_tbls/polynomial.rs.html#24\">Source</a><a href=\"#impl-StructuralPartialEq-for-Poly%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"fastcrypto_tbls/polynomial/struct.Poly.html\" title=\"struct fastcrypto_tbls::polynomial::Poly\">Poly</a>&lt;C&gt;</h3></section>","StructuralPartialEq","fastcrypto_tbls::polynomial::PrivatePoly","fastcrypto_tbls::polynomial::PublicPoly"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[23249]}