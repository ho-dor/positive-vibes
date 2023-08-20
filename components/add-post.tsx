"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction, useState } from "react";
import { isThePostPositive } from "../lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { fetchData, insertData } from "@/db/client";

export function AddPost() {
  const [post, setPost] = useState<string>("");
  const { toast } = useToast();

  const reviewPost = async () => {
    if (isThePostPositive(post)) {
      await insertData(post);

      toast({
        title: "Posted",
        description: "Your post is successfully posted",
      });
    } else {
      toast({
        title: "Uh oh!!",
        description:
          "Your post doesn't meet our guidelines right now. If it is a mistake, contact us.",
      });
    }
    setPost("");
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Add Post</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>New Post</DialogTitle>
            <DialogDescription>
              Add a positive or helpful message that will spread good vibes :)
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Textarea
                id='name'
                value={post}
                className='col-span-3'
                placeholder='Wassup....'
                onChange={(e) => {
                  setPost(e.target.value);
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogTrigger asChild={false}>
              <Button type='submit' onClick={reviewPost}>
                Add Post For Review
              </Button>
            </DialogTrigger>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
