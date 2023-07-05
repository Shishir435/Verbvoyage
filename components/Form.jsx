import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full  flex-center flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type}  amazing thoughts.
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-[90%] max-w-2xl flex flex-col gap-7 form'
      >
        <label>
        <span className='font-satoshi font-semibold text-base text-gray-700'>
            Write your thoughts
          </span>

          <textarea
            value={post.verb}
            onChange={(e) => setPost({ ...post, verb: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag you thoughts
            <span className='font-normal'>
              (#inspiration, #motivation, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm cursor-pointer'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 cursor-pointer text-sm blue_btn rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
