"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateVerb = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const verbId = searchParams.get("id");

  const [post, setPost] = useState({ verb: "", tag: "", });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getVerbDetails = async () => {
      const response = await fetch(`/api/verb/${verbId}`);
      const data = await response.json();

      setPost({
        verb: data.verb,
        tag: data.tag,
      });
    };

    if (verbId) getVerbDetails();
  }, [verbId]);

  const updateVerb = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!verbId) return alert("Missing VerbId!");

    try {
      const response = await fetch(`/api/verb/${verbId}`, {
        method: "PATCH",
        body: JSON.stringify({
          verb: post.verb,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateVerb}
    />
  );
};

export default UpdateVerb;
