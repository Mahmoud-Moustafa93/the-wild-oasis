import { useForm } from "react-hook-form";
import { useUpdateBooking } from "./useUpdateBooking";
import { useState } from "react";

import FormRow from "../../ui/FormRow";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import toast from "react-hot-toast";
import Select from "../../ui/Select";

function UpdateBookingForm({ bookingToUpdate, onCloseModal }) {
  const { updateBooking, isUpdating } = useUpdateBooking();
  const { id, ...updateValues } = bookingToUpdate;

  const [status, setStatus] = useState(updateValues.status);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: updateValues,
  });
  const { errors } = formState;

  function onSubmit(data) {
    updateBooking(
      { id, newBookingData: { ...data, status } },
      {
        onSuccess: () => {
          reset();
          onCloseModal();
        },
      }
    );
  }

  function onError(error) {
    toast.error(error);
    console.error(error);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)} type="modal">
      <FormRow label="Start date" error={errors?.name?.message}>
        <Input
          type="text"
          id="startDate"
          disabled={isUpdating}
          {...register("startDate", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="End date" error={errors?.name?.message}>
        <Input
          type="text"
          id="endDate"
          disabled={isUpdating}
          {...register("endDate", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Number of nights" error={errors?.name?.message}>
        <Input
          type="number"
          id="numNights"
          disabled={isUpdating}
          {...register("numNights", {
            required: "This field is required",
          })}
          min={1}
        />
      </FormRow>

      <FormRow label="Number of guests" error={errors?.name?.message}>
        <Input
          type="number"
          id="numGuests"
          disabled={isUpdating}
          {...register("numGuests", {
            required: "This field is required",
            min: { value: 1, message: "Guests should be at least 1" },
          })}
          min={1}
        />
      </FormRow>

      <FormRow label="Total price" error={errors?.name?.message}>
        <Input
          type="number"
          id="totalPrice"
          disabled={isUpdating}
          {...register("totalPrice", {
            required: "This field is required",
            min: { value: 1, message: "Price should be at least 1" },
          })}
          min={1}
        />
      </FormRow>

      <FormRow label="Status" error={errors?.name?.message}>
        <Select
          options={[
            { label: "unconfirmed", value: "unconfirmed" },
            { label: "checked in", value: "checked-in" },
            { label: "checked out", value: "checked-out" },
          ]}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </FormRow>

      <FormRow>
        <Button
          $variation="secondary"
          type="reset"
          onClick={() => onCloseModal()}
        >
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update booking</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateBookingForm;
